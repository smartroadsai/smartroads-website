// PostHog analytics (EU, cookieless) + click events. Loaded on every page.
// Only runs on the production domain so local previews aren't counted.
if (location.hostname === 'smartroads.ai') {
!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],Object.defineProperty(u,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e}}),Object.defineProperty(u.people,"toString",{configurable:!0,enumerable:!0,writable:!0,value:function(){return u.toString(1)+".people (stub)"}}),o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagResult isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_oZavWXJ784LKf4joc6DWeCxNJ5S57ua9LCiYzTAj3YHh', {
  api_host: 'https://eu.i.posthog.com',
  defaults: '2026-08-30',
  cookieless_mode: 'always',
  person_profiles: 'never',
  disable_session_recording: true
});

// One delegated listener, because the page markup is rendered at runtime by support.js.
document.addEventListener('click', function (e) {
  var el = e.target.closest('a[href], button[aria-pressed]');
  if (!el) return;
  if (el.tagName === 'BUTTON') {
    posthog.capture('Language', { lang: el.getAttribute('aria-label') });
    return;
  }
  var url = new URL(el.getAttribute('href'), location.href);
  var label = (el.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);
  if (url.protocol === 'mailto:') {
    posthog.capture('Email click', { subject: url.searchParams.get('subject') || '', label: label });
  } else if (/\.pdf$/i.test(url.pathname)) {
    posthog.capture('PDF download', { file: el.getAttribute('download') || url.pathname, label: label });
  } else if (url.host !== location.host) {
    posthog.capture('Outbound link', { url: url.href, label: label });
  }
}, true);
}
