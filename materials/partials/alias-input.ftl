<div class="alias-input-widget form-group ${sizingClasses}" style="${sizingStyles}">
    <label class="form-label label ${textualClasses} <#if hideLabel>sr-only</#if>" style="${textualStyles}"
            for="${id}">${content}</label>
    <div class="input-group">
        <input id="${id}" class="form-control validate ${appearanceClasses}" type="text"
                style="${appearanceStyles}"
                <#if maxlength??>maxlength="${maxlength}"</#if> <#if disabled??>disabled</#if> name="${name}"
                value="${value!}"
        />
    </div>
    <#if (error)??>
        <span id="error-message-${name}" class="error-message">${error}</span>
    </#if>
</div>