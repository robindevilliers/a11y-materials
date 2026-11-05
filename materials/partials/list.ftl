<div class="list-widget ${sizingClasses}" style="${sizingStyles}">
    <#if listStyle == "BULLET">
        <ul class="list list-bullet ${appearanceClasses}" style="${appearanceStyles}">
            ${content}
        </ul>
    <#elseif listStyle == "NUMBERED">
        <ol class="list list-numbered ${appearanceClasses}" style="${appearanceStyles}">
            ${content}
        </ol>
    <#elseif listStyle == "BORDERED">
        <ul class="list list-group ${appearanceClasses}" style="${appearanceStyles}">
            ${content}
        </ul>
    </#if>
</div>