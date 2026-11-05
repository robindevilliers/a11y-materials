<div class="error-summary-widget ${sizingClasses}" style="${sizingStyles}">
    <div class="error-summary card ${appearanceClasses}" style="${appearanceStyles}">
        <div class="card-header header">
            Errors
        </div>
        <div class="card-body">
            <p class="label">There are validation errors.</p>
            <ul>
                <#list errors as key, value>
                    <li id="error-summary-message-${key}" class="error-message form-text">${value}</li>
                </#list>
            </ul>
        </div>
    </div>
</div>