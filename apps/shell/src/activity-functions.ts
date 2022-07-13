export function prefix(location, ...prefixes) {
  return prefixes.some(
    prefix => location.href.indexOf(`${location.origin}/${prefix}`) !== -1
  );
}

export function reactDashboard(location) {
  return prefix(location, 'react-dashboard');
}

export function vueAuth(location) {
  return prefix(location, 'vue-auth');
}

export function reactLayout(location) {
  return true;
}