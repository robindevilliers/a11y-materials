import { Renderer } from '../Renderer';
import flexItemSupport from '../flex-item-support';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import { RenderError } from '../RenderError';

export default class AccordionRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'accordion';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.flush = element.attributes.flush === "true";
        data.content = renderingEngine.renderChildren(element);

        const sizingClassManager = new ClassManager(classMappings);
        const appearanceClassManager = new ClassManager(classMappings);
        flexItemSupport(data, sizingClassManager, appearanceClassManager, element.attributes);
        data.sizingClasses = sizingClassManager.toString();
        data.appearanceClasses = appearanceClassManager.toString();

        return renderingEngine.render('accordion.ftl', data);
    }
}
