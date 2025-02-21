# AWS Lambda: Serverless Addition Function  

This AWS Lambda function performs a simple arithmetic operation—adding two numbers. Designed for seamless integration with API Gateway, AWS SDK, or direct execution via the AWS Lambda console, it ensures high availability and scalability.  

---

## Features  
- Accepts two numeric inputs (`num1` and `num2`).  
- Returns the computed sum in JSON format.  
- Fully serverless and highly efficient.  

---

## Technologies Used  
- **AWS Lambda** (Serverless Execution)  
- **Node.js** (Runtime)  
- **API Gateway** (Optional for HTTP triggers)  
- **AWS CLI / AWS Console** for deployment  

---

## Example Input (JSON)  

```json
{
  "num1": 5,
  "num2": 7
}
