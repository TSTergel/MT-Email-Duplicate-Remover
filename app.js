function removeDuplicatesFromEmails(emails) {
    const emailsArray = emails.split('\n');
    const uniqueEmails = removeDuplicatesFromList(emailsArray);

    const originalLinesCount = emailsArray.length;
    const removedDuplicatesCount = originalLinesCount - uniqueEmails.length;
    const remainingEmailsCount = uniqueEmails.length;

    return {
        text: uniqueEmails.join('\n'),
        originalLinesCount,
        removedDuplicatesCount,
        remainingEmailsCount,
    };
}

function removeDuplicatesFromList(items) {
    const uniqueItems = new Set();
    return items.filter(item => {
        if (item === "" || uniqueItems.has(item)) {
            return false;
        }
        uniqueItems.add(item);
        return true;
    })
}

function onSubmitButtonClick() {
    let rawEmails = document.getElementById('raw-emails').value;

    const ignoreCapitals = document.getElementById('ignore-capitals').checked;
    if (ignoreCapitals) {
      rawEmails = rawEmails.toLowerCase();
    }

    const cleanedEmails = removeDuplicatesFromEmails(rawEmails);

    document.getElementById('clean-emails').value = cleanedEmails.text;
    document.getElementById('emails-stats').textContent = `${cleanedEmails.originalLinesCount} original lines, ${cleanedEmails.removedDuplicatesCount} removed, ${cleanedEmails.remainingEmailsCount} remaining`;
}

function onCleanEmailsInputClick() {
    const cleanEmailsInput = document.getElementById('clean-emails');
    cleanEmailsInput.select();
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', onSubmitButtonClick);

const cleanEmailsInput = document.getElementById('clean-emails');
cleanEmailsInput.addEventListener("click", onCleanEmailsInputClick);
