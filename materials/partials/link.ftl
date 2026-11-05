<a class="link-widget <#if representation == 'text'>${sizingClasses} ${appearanceClasses}</#if>" style="${sizingStyles} ${appearanceStyles}"
        <#if testMode>
            href="javascript:void(0)"
            onclick="alert('Link clicked');"
        <#else>
            href="${href}"
        </#if>
        <#if target??>target="${target}"</#if>
        <#if rel??>rel="${rel}"</#if>
>${content}</a>
