import { Renderer } from '../Renderer';
import { Element, isElement } from '../../xml-parser';
import Properties from '../Properties';
import flexItemSupport from '../flex-item-support';

import ClassManager from '../ClassManager';
import RenderingEngine from '../RenderingEngine';
import { RenderError } from '../RenderError';

export default class ProgressBarRenderer implements Renderer {
    accept(name: string): boolean {
        return name === 'progress-bar';
    }

    render(element: Element, classMappings: Properties, renderingEngine: RenderingEngine): string {

        if (!element.attributes.v) {
            throw new RenderError("Version attribute 'v' not configured against element: " + element.name);
        }

        const milestones = element.children.filter(el => isElement(el))
            .map(el => el as Element)
            .filter(el => el.name === 'mile-stone');

        if (milestones.length) {
            milestones[0].attributes.active = "true";
        }

        const data: Record<string, any> = {};
        data.id = element.attributes.id;
        data.axis = element.attributes.axis;
        data.size = element.attributes.size;
        data.content = renderingEngine.renderChildren(element);


        const sizingClassManager = new ClassManager(classMappings);
        const appearanceClassManager = new ClassManager(classMappings);
        appearanceClassManager.append(element.attributes.flavour, 'progressbar-', 'progressbar-default');
        appearanceClassManager.append(element.attributes.axis, 'progressbar-axis-', '');
        appearanceClassManager.append(element.attributes.labelSide, 'progressbar-label-side-', '');
        flexItemSupport(data, sizingClassManager, appearanceClassManager, element.attributes);
        data.appearanceClasses = appearanceClassManager.toString();
        data.sizingClasses = sizingClassManager.toString();

        return renderingEngine.render('progress-bar.ftl', data);
    }
}