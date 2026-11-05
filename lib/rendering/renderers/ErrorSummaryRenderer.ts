import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';

export default class ErrorSummaryRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'error-summary';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.errors = {
            "one": "Error message one",
            "two": "Error message two"
        }

        const sizingClassManager = new ClassManager(classMappings);
        const appearanceClassManager = new ClassManager(classMappings);
        flexItemSupport(data, sizingClassManager, appearanceClassManager, element.attributes);
        data.appearanceClasses = appearanceClassManager.toString();
        data.sizingClasses = sizingClassManager.toString();

        return renderingEngine.render('error-summary.ftl', data);
    }
}
