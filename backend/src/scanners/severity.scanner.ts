export const getIssueSeverity = (report: any) => {

    const issues: {
        severity: string;
        message: string;
    }[] = [];

    if (report.javascriptErrors.javascriptErrors.length > 0) {

        issues.push({
            severity: "Critical",
            message: "JavaScript Runtime Errors Found",
        });

    }

    if (report.networkErrors.failedRequests.length > 0) {

        issues.push({
            severity: "High",
            message: "Network Request Failures Detected",
        });

    }

    if (report.consoleErrors.consoleMessages.length > 0) {

        issues.push({
            severity: "Medium",
            message: "Console Messages Found",
        });

    }

    if (report.accessibility.imagesWithoutAlt > 0) {

        issues.push({
            severity: "Low",
            message: "Images Missing Alt Attribute",
        });

    }

    if (report.accessibility.emptyLinks > 0) {

        issues.push({
            severity: "Low",
            message: "Empty Links Found",
        });

    }

    if (report.accessibility.missingFormLabels > 0) {

        issues.push({
            severity: "Medium",
            message: "Form Labels Missing",
        });

    }

    return issues;

};