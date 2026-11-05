<#if size == 'SMALL'>
    <#assign sizeCls = 'progressbar-small'>
<#elseif size == 'MEDIUM'>
    <#assign sizeCls = 'progressbar-medium'>
<#elseif size == 'LARGE'>
    <#assign sizeCls = 'progressbar-large'>
</#if>
<div class="progress-bar-widget ${sizingClasses}" style="${sizingStyles}">
    <div id="${id!}"
            class="progressbar ${sizeCls} <#if axis == 'HORIZONTAL'>progressbar-horizontal<#else>progressbar-vertical</#if> ${appearanceClasses}"
            style="${appearanceStyles}">
        ${content}
    </div>
</div>
