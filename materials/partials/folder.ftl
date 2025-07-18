<div id="${id!}" class="folder-widget panel  ${classes}" style="${itemStyles}">
    ${header}
    <div class="panel-body">
        <div class="folder-content panel-content">
            <#list values as val>
                <div id="folder-item-${val.workflowId}-${val.wizardId}" class="panel-item">
                    ${val.html}
                </div>
            </#list>
            <#if !values?has_content>
                <div id="folder-no-content" class="panel-no-content no-content">No Content</div>
            </#if>
        </div>
    </div>
    <div class="panel-footer">
        <ul class="pagination">
            <li class="page-item <#if !previousPage?has_content >disabled</#if>">
                <form class="form-inline" method="get" action="${action}">
                    <input type="hidden" name="bust" value="${bust}"/>
                    <#if previousPage?has_content >
                        <input type="hidden" name="fIndex" value="${previousPage}">
                    </#if>
                    <button type="submit" aria-label="Previous" class="btn btn-link page-link"
                            <#if !previousPage?has_content >disabled</#if> name="lPage"
                            onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                    >
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </button>
                </form>
            </li>

            <#list offeredPages as page>
                <li class="page-item <#if page == currentPage >active</#if>">
                    <form class="form-inline" method="get" action="${action}">
                        <input type="hidden" name="bust" value="${bust}"/>
                        <input type="hidden" name="fIndex" value="${page}">
                        <button type="submit" aria-label="Page" class="page-link" name="lPage"
                                onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                        >
                            ${page + 1}
                        </button>
                    </form>
                </li>
            </#list>

            <li class="page-item <#if !nextPage?has_content >disabled</#if>">
                <form class="form-inline" method="get" action="${action}">
                    <input type="hidden" name="bust" value="${bust}"/>
                    <#if nextPage?has_content >
                        <input type="hidden" name="fIndex" value="${nextPage}">
                    </#if>
                    <button type="submit" aria-label="Next" class="btn btn-link page-link"
                            onclick="${testMode?string('alert(&quot;Button clicked&quot;); event.preventDefault();','')}"
                            <#if !nextPage?has_content >disabled</#if> name="lPage">
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </button>
                </form>
            </li>
        </ul>
    </div>
</div>