<#if paragraphStyle == "PLAIN">
    <p class="text-widget plain-paragraph ${sizingClasses} ${appearanceClasses} ${textualClasses}" style="${sizingStyles} ${appearanceStyles} ${textualStyles}">${content}</p>
<#elseif paragraphStyle == "SUPPRESSED">
    <p class="text-widget suppressed-paragraph ${sizingClasses} ${appearanceClasses} ${textualClasses}" style="${sizingStyles} ${appearanceStyles} ${textualStyles}">${content}</p>
<#elseif paragraphStyle == "BLOCKQUOTE">
    <p class="text-widget blockquote-paragraph ${sizingClasses} ${appearanceClasses} ${textualClasses}" style="${sizingStyles} ${appearanceStyles} ${textualStyles}">${content}</p>
</#if>