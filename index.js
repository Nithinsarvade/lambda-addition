exports.handler = async (event) => {
    try {
        // Extract input numbers from the event
        const { num1, num2 } = event;

        // Validate inputs
        if (typeof num1 !== 'number' || typeof num2 !== 'number') {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    error: 'Invalid input. Both num1 and num2 must be numbers.'
                })
            };
        }

        // Calculate the result
        const result = num1 + num2;

        // Return the result
        return {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Success',
                result: result
            })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'An error occurred',
                details: error.message
            })
        };
    }
};
