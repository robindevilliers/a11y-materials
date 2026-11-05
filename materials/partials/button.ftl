<#if formRequired>
    <form action="${action}" style="${sizingStyles} ${appearanceStyles}" method="post"
    enctype="application/x-www-form-urlencoded" class="operation-button">
    <input type="hidden" name="payload" value="${payload}">
</#if>
<div class="button-widget ${sizingClasses}" style="<#if !formRequired>${sizingStyles}</#if>">
    <button id="${id}" type="submit" name="${name}" style="${appearanceStyles}"
            class="<#if representation == 'text' || representation == 'icon'>btn  ${appearanceClasses}</#if>"
            onclick="${testMode?string('alert(&quot;Buton clicked&quot;); event.preventDefault();','')}"
            <#if disabled??>disabled</#if>
    >
        ${content}
    </button>

    <#if (error)??>
        <span id="error-message-${name}" class="error-message">${error}</span>
    </#if>
</div>
<#if formRequired>
    </form>
</#if>