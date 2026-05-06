import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const appFields: any[] = [
  {
    type: "string",
    name: "title",
    label: "App Name",
    isTitle: true,
    required: true,
  },
  { type: "string", name: "category", label: "Category" },
  { type: "string", name: "collection", label: "Collection" },
  { type: "string", name: "summary", label: "Summary", ui: { component: "textarea" } },
  { type: "image", name: "banner", label: "Banner Image" },
  { type: "image", name: "thumbnail", label: "Thumbnail Image" },
  { type: "string", name: "author", label: "Author" },
  { type: "string", name: "website", label: "Website URL" },
  { type: "string", name: "country", label: "Country" },
  { type: "number", name: "rating", label: "Rating (e.g. 4.7)" },

  // APK
  { type: "image", name: "apk", label: "APK Download URL" },
  { type: "string", name: "apk_version", label: "APK Version" }, // ← string not number
  
  // Windows
  { type: "image", name: "windows", label: "Windows Download URL" },
  { type: "string", name: "win_version", label: "Windows Version" }, // ← string not number
  
  // Mac
  { type: "image", name: "mac", label: "Mac Download URL" },
  { type: "string", name: "mac_version", label: "Mac Version" }, // ← string not number

  {
    type: "rich-text",
    name: "body",
    label: "Description",
    isBody: true,
  },

];

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  // Uncomment to allow cross-origin requests from non-localhost origins
  // during local development (e.g. GitHub Codespaces, Gitpod, Docker).
  // Use 'private' to allow all private-network IPs (WSL2, Docker, etc.)
  // server: {
  //   allowedOrigins: ['https://your-codespace.github.dev'],
  // },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/r/content-modelling-collections/
  schema: {
   collections: [
     {
        name: "communication",
        label: "Communication Apps",
        path: "src/content/communication", // update to match your actual folder
        format: "md",
        fields: appFields,
      },
      {
        name: "apps",
        label: "Apps",
        path: "src/content/apps", // update to match your actual folder
        format: "md",
        fields: appFields,
      },
      {
        name: "browser",
        label: "browser",
        path: "src/content/browsers", // update to match your actual folder
        format: "md",
        fields: appFields,
      },
    ],
  },
});
