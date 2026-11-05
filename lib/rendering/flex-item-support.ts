import { StringBuffer } from '../utilities/StringBuffer';
import ClassManager from './ClassManager';

export default function flexItemSupport(data: Record<string, any>, sizingClassManager: ClassManager, appearanceClassManager: ClassManager, attributes: Record<string, string>) {

    const styles: Record<string, string> = {};

    if (attributes.padding) {
        styles['padding'] = attributes.padding;
    }

    if (attributes.margin) {
        styles['margin'] = attributes.margin;
    }

    if (attributes.flexBasis) {
        styles['flex-basis'] = attributes.flexBasis;
    }

    if (attributes.flexGrow) {
        styles['flex-grow'] = attributes.flexGrow;
    }

    if (attributes.flexShrink) {
        styles['flex-shrink'] = attributes.flexShrink;
    }

    if (attributes.alignSelf) {
        if (attributes.alignSelf === 'START') {
            styles['align-self'] = 'flex-start';
        } else if (attributes.alignSelf === 'END') {
            styles['align-self'] = 'flex-end';
        } else if (attributes.alignSelf === 'CENTER') {
            styles['align-self'] = 'center';
        } else if (attributes.alignSelf === 'BASELINE') {
            styles['align-self'] = 'baseline';
        } else if (attributes.alignSelf === 'STRETCH') {
            styles['align-self'] = 'stretch';
        }
    }

    if (attributes.height) {
        styles['height'] = attributes.height;
    }

    if (attributes.width) {
        styles['width'] = attributes.width;
    }

    if (attributes.backgroundFlavour) {
        appearanceClassManager.append(attributes.backgroundFlavour, 'bg-', '');
    }

    if (attributes.columnWidth) {
        sizingClassManager.append(attributes.columnWidth, 'col-', '');
    }

    if (attributes.columnWidthExtraSmall) {
        sizingClassManager.append(attributes.columnWidthExtraSmall, 'col-xs-', '');
    }

    if (attributes.columnWidthSmall) {
        sizingClassManager.append(attributes.columnWidthSmall, 'col-sm-', '');
    }

    if (attributes.columnWidthMedium) {
        sizingClassManager.append(attributes.columnWidthMedium, 'col-md-', '');
    }

    if (attributes.columnWidthLarge) {
        sizingClassManager.append(attributes.columnWidthLarge, 'col-lg-', '');
    }

    if (attributes.columnWidthExtraLarge) {
        sizingClassManager.append(attributes.columnWidthExtraLarge, 'col-xl-', '');
    }

    if (attributes.offsetColumnWidth) {
        sizingClassManager.append(attributes.offsetColumnWidth, 'offset-', '');
    }

    if (attributes.offsetColumnWidthExtraSmall) {
        sizingClassManager.append(attributes.offsetColumnWidthExtraSmall, 'offset-xs-', '');
    }

    if (attributes.offsetColumnWidthSmall) {
        sizingClassManager.append(attributes.offsetColumnWidthSmall, 'offset-sm-', '');
    }

    if (attributes.offsetColumnWidthMedium) {
        sizingClassManager.append(attributes.offsetColumnWidthMedium, 'offset-md-', '');
    }

    if (attributes.offsetColumnWidthLarge) {
        sizingClassManager.append(attributes.offsetColumnWidthLarge, 'offset-lg-', '');
    }

    if (attributes.offsetColumnWidthExtraLarge) {
        sizingClassManager.append(attributes.offsetColumnWidthExtraLarge, 'offset-xl-', '');
    }

    if (attributes.hideColumn === 'true') {
        sizingClassManager.add('hide-column');
    }

    if (attributes.hideColumnExtraSmall === 'true') {
        sizingClassManager.add('hide-xs-column');
    }

    if (attributes.hideColumnSmall === 'true') {
        sizingClassManager.add('hide-sm-column');
    }

    if (attributes.hideColumnMedium === 'true') {
        sizingClassManager.add('hide-md-column');
    }

    if (attributes.hideColumnLarge === 'true') {
        sizingClassManager.add('hide-lg-column');
    }

    if (attributes.hideColumnExtraLarge === 'true') {
        sizingClassManager.add('hide-xl-column');
    }

    const buffer = new StringBuffer();
    for (const [key, value] of Object.entries(styles)) {
        buffer.append(`${key}: ${value};`);
    }

    data.sizingStyles = buffer.toString();

    const innerStyles: Record<string, string> = {};

    if (attributes.borderRadius) {
        innerStyles['border-radius'] = attributes.borderRadius;
    }

    const innerBuffer = new StringBuffer();
    for (const [key, value] of Object.entries(innerStyles)) {
        innerBuffer.append(`${key}: ${value};`);
    }
    data.appearanceStyles = innerBuffer.toString();
}
