<div class="error-summary-widget ${sizingClasses}" style="${sizingStyles}">
    <div class="error-summary ${appearanceClasses}" style="${appearanceStyles}">
        <div class="error-summary-header header">
            Errors
        </div>
        <div class="error-summary-body">
            <p class="label">There are validation errors.</p>
            <ul>
                <#list errors as key, value>
                    <li id="error-summary-message-${key}" class="error-message form-text">${value}</li>
                </#list>
            </ul>
        </div>
    </div>
</div>