<#if size == "LARGE">
    <h1 id="${id}" class="title-widget ${sizingClasses} ${appearanceClasses} ${textualClasses}"
            style="${textualStyles} ${sizingStyles} ${appearanceStyles}">${content}</h1>
<#elseif size == "LARGER">
    <h2 id="${id}" class="title-widget ${sizingClasses} ${appearanceClasses} ${textualClasses}"
            style="${textualStyles} ${sizingStyles} ${appearanceStyles}">${content}</h2>
<#elseif size == "MEDIUM">
    <h3 id="${id}" class="title-widget ${sizingClasses} ${appearanceClasses} ${textualClasses}"
            style="${textualStyles} ${sizingStyles} ${appearanceStyles}">${content}</h3>
<#elseif size == "SMALLER">
    <h4 id="${id}" class="title-widget ${sizingClasses} ${appearanceClasses} ${textualClasses}"
            style="${textualStyles} ${sizingStyles} ${appearanceStyles}">${content}</h4>
<#elseif size == "SMALL">
    <h5 id="${id}" class="title-widget ${sizingClasses} ${appearanceClasses} ${textualClasses}"
            style="${textualStyles} ${sizingStyles} ${appearanceStyles}">${content}</h5>
<#else>
    <h1 id="${id}" class="title-widget ${sizingClasses} ${appearanceClasses} ${textualClasses}"
            style="${textualStyles} ${sizingStyles} ${appearanceStyles}">${content}</h1>
</#if>