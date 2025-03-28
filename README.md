# Youtube Copy

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

## Add Api key to run videos
Make API Key on console.cloud.google.com

run : 
```bash
ng g environments
```

### Files should look like :

environment.ts
```typescript
export const environment = {
production: true,
    apiUrlYoutube: "https://www.googleapis.com/youtube/v3",
    apiKeyYoutube : "XXXX"
};
```

environment.development.ts
```typescript
export const environment = {
    production: false,
    apiUrlYoutube: "https://www.googleapis.com/youtube/v3",
    apiKeyYoutube : "XXXX"
};
```

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
