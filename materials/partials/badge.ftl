<#if size == "LARGE">
    <h1 class="badge-widget ${sizingClasses}" style="${sizingStyles}">
        <span class="badge ${appearanceClasses} ${textualClasses}"
                style="${appearanceStyles} ${textualStyles}">${content}</span>
    </h1>
<#elseif size == "LARGER">
    <h2 class="badge-widget ${sizingClasses}" style="${sizingStyles}">
        <span class="badge ${appearanceClasses} ${textualClasses}"
                style="${appearanceStyles} ${textualStyles}">${content}</span>
    </h2>
<#elseif size == "MEDIUM">
    <h3 class="badge-widget ${sizingClasses}" style="${sizingStyles}">
        <span class="badge ${appearanceClasses} ${textualClasses}"
                style="${appearanceStyles} ${textualStyles}">${content}</span>
    </h3>
<#elseif size == "SMALLER">
    <h4 class="badge-widget ${sizingClasses}" style="${sizingStyles}">
        <span class="badge ${appearanceClasses} ${textualClasses}"
                style="${appearanceStyles} ${textualStyles}">${content}</span>
    </h4>
<#elseif size == "SMALL">
    <h5 class="badge-widget ${sizingClasses}" style="${sizingStyles}">
        <span class="badge ${appearanceClasses} ${textualClasses}"
                style="${appearanceStyles} ${textualStyles}">${content}</span>
    </h5>
<#else>
    <h1 class="badge-widget ${sizingClasses}" style="${sizingStyles}">
        <span class="badge ${appearanceClasses} ${textualClasses}"
                style="${appearanceStyles} ${textualStyles}">${content}</span>
    </h1>
</#if>