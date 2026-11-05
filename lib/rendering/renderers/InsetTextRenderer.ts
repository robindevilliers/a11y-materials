import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import { flexContainerSupport } from '../flex-container-support';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { RenderError } from '../RenderError';

export default class InsetTextRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'inset-text';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.content = renderingEngine.renderChildren(element);

        const sizingClassManager = new ClassManager(classMappings);
        const appearanceClassManager = new ClassManager(classMappings);
        appearanceClassManager.append(element.attributes.flavour, 'inset-text-', 'inset-text-default');
        flexItemSupport(data, sizingClassManager, appearanceClassManager, element.attributes);
        flexContainerSupport(data, sizingClassManager, element);
        data.appearanceClasses = appearanceClassManager.toString();
        data.sizingClasses = sizingClassManager.toString();

        return renderingEngine.render('inset-text.ftl', data);
    }
}
