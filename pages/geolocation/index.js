import repoLink from "../../components/repo-link.js";
import geolocationInfo from "../../components/geolocation-info.js";

// todo - add geo to footer!

export default {
  title: "Geolocation",
  description:
    "Use Netlify Edge Functions to get information about a user's location to serve location-specific content",
  image: "geolocation",
  page: function () {
    return `
    <section>
      <h1>Geolocation</h1>
      <p>You can use Edge Functions to get information about a user's location to serve location-specific content.</p>
      <p>In this example, we use the <code>Context.geo</code> object to display information about your location.</p>
      <pre><code>//TO DO!

// city?: string;
// country?: {
//   code?: string;
//   name?: string;
// };
// subdivision?: {
//   code?: string;
//   name?: string;
// };</code></pre>
      <h2>See this in action ** DUMMY DATA — REPLACE! **</h2>

      ${geolocationInfo({ city: "FunkyTown", countryCode: "GB", countryName: "Phil's Country" })}

      <ul>
        <li>View raw geolocation data at <a href="/geolocation">/geolocation</a></li>
        <li>${repoLink("geolocation.js")}</li>
      </ul>
    </section>
  `;
  },
};
