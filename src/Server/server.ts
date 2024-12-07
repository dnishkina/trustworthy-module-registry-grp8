import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes';
import userAuthRoutes from '../Api/UserRelatedApi/UserAuthentication'
import uploadPackageRoutes from '../Api/PackageApis/uploadPackage';
import deletePackageRoutes from '../Api/PackageApis/deletePackage';
import updatePackageRoutes from '../Api/PackageApis/updatePackage';
import downloadPackageRoutes from '../Api/PackageApis/downloadPackage';
import fetchVersions from '../Api/PackageApis/fetchVersions';
import fetchDirectory from '../Api/PackageApis/fetchDirectory';
import searchPackages from '../Api/PackageApis/searchPackages';
import sizeCost from '../Api/PackageApis/sizeCost';
import fullReset from '../Api/PackageApis/fullReset';

const app = express();
const port = 3000;

// Middleware for parsing JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Include user authentication routes
app.use('/api', userAuthRoutes);

// Include main router (if necessary)
app.use('/api', router);

// Register the upload routes
app.use('/api', uploadPackageRoutes);  // Upload package routes

app.use('/api', deletePackageRoutes);  // Delete package routes

app.use('/api', updatePackageRoutes);  // Update package routes

app.use('/api', downloadPackageRoutes);// download package routes

app.use('/api', fetchVersions); // Fetch package versions

app.use('/api', fetchDirectory); // Fetch directories

app.use('/api', searchPackages); // Search packages

app.use('/api', sizeCost); // Check size cost

app.use('/api', fullReset);

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

