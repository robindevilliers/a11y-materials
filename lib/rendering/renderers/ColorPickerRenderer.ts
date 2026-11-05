import { Renderer } from '../Renderer';
import { Element } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';
import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { textStyleSupport } from "../text-style-support";


export default class ColorPickerRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'color-picker';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.content = renderingEngine.renderChildren(element);
        data.name = 'colors';

        const sizingClassManager = new ClassManager(classMappings);
        const appearanceClassManager = new ClassManager(classMappings);
        textStyleSupport(data, element, classMappings);
        flexItemSupport(data, sizingClassManager, appearanceClassManager, element.attributes);
        data.sizingClasses = sizingClassManager.toString();
        data.appearanceClasses = appearanceClassManager.toString();
        data.error = "Color Picker error message";

        return renderingEngine.render('color-picker.ftl', data);
    }
}