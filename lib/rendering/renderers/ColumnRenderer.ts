import { Renderer } from '../Renderer';
import { Element, isElement } from '../../xml-parser';
import { textStyleSupport } from '../text-style-support';
import Properties from '../Properties';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { flexContainerSupport } from "../flex-container-support";

export default class ColumnRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'column';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.content = renderingEngine.renderChildren(element);
        if (element.attributes.width) {
            data.columnStyles = `width: ${element.attributes.width}; `
        }

        const classManager = new ClassManager(classMappings);
        flexContainerSupport(data, classManager, element);
        data.classes = classManager.toString();

        return renderingEngine.render('column.ftl', data);
    }
}