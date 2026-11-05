import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import Store from '../../store/Store';
import { RenderError } from '../RenderError';

export default class BackLinkRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'back-link';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const data: Record<string, any> = {};

        data.id = element.attributes.id;
        data.testMode = Store.isTestContext();

        const sizingClassManager = new ClassManager(classMappings);
        const appearanceClassManager = new ClassManager(classMappings);
        flexItemSupport(data, sizingClassManager, appearanceClassManager, element.attributes);
        data.sizingClasses = sizingClassManager.toString();
        data.appearanceClasses = appearanceClassManager.toString();

        return renderingEngine.render('back-link.ftl', data);
    }
}
