const AWS = require("aws-sdk");
const WinstonCloudwatch = require("winston-cloudwatch");

AWS.config.update({ region: "us-east-1" });

const cloudwatchLogger = new WinstonCloudwatch({
    logGroupName: "API-Logs",
    logStreamName: "ErrorLogs",
    awsRegion: "us-east-1"
});

module.exports = cloudwatchLogger;
