Based on the codebase context, you're asking me to create a README for the TallerDeCotxes car management system. <cite/> This system is a web-based application for managing car records with photo search functionality, built using HTML, JavaScript, and cloud services integration.

# TallerDeCotxes - Car Management System

A web-based car management application that allows users to add, delete, display, and search for car records with integrated photo functionality.

## Features

- **Add Cars**: Input car name and model to create new records.
- **Display Cars**: View all stored car records in a formatted list.
- **Delete Cars**: Remove specific cars by brand and model.
- **Photo Search**: Find car photos using Azure Functions and AWS S3 integration.

## Architecture

The system uses a client-heavy architecture with multiple JavaScript implementations:

- **Frontend**: HTML interface with form controls and display areas.
- **Primary Logic**: `java2.js` handles in-memory car management with array storage.
- **Alternative Logic**: `java.js` provides database integration with Azure SQL.
- **Photo Service**: AWS Lambda function for S3 photo retrieval.

## File Structure

```
PracticaAzure/
├── index.html          # Main user interface
├── java2.js           # Primary JavaScript implementation
├── java.js            # Alternative implementation with database
├── serverless.js      # AWS Lambda photo service
└── css.css            # Styling
```

## Setup and Usage

1. **Basic Setup**: Open `index.html` in a web browser. 

2. **Database Configuration** (for `java.js`): Configure Azure SQL connection.

3. **Photo Service**: Deploy `serverless.js` to AWS Lambda and configure S3 bucket.

## Cloud Integration

- **Azure SQL Database**: Stores car records in `Coches` table with `Marca` and `Modelo` columns.
- **Azure Functions**: Handles photo search requests.
- **AWS S3**: Stores car photos in organized folder structure.

## Deployment

The system includes GitHub Actions workflow for Azure Web App deployment.

**Notes**

The system contains two parallel JavaScript implementations (`java2.js` and `java.js`) that provide similar functionality through different approaches - one using in-memory arrays and the other using direct database connections. <cite/> The photo search feature demonstrates cross-cloud integration between Azure Functions and AWS S3 services. <cite/> The codebase includes hardcoded credentials in `java.js` which should be moved to environment variables for production use.

