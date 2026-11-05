<a id="${id}" class="${sizingClasses} ${appearanceClasses} ${textualClasses}" style="${sizingStyles} ${appearanceStyles} ${textualStyles}"
        href="${testMode?string('javascript:alert(&quot;Link clicked&quot;); event.preventDefault();',href)}"
>${content}</a>
