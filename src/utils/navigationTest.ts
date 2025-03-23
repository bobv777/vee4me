import { NavigateFunction } from 'react-router-dom';

export const testNavigation = async (navigate: NavigateFunction) => {
  const routes = [
    '/',
    '/terms-of-service',
    '/services/ai-marketing-automation',
    '/services/content-strategy',
    '/services/performance',
    '/services/ai-consulting',
    '/services/custom-ai-solutions',
    '/services/website-optimization',
    '/case-studies',
    '/about-consultant',
    '/contact-quote'
  ];

  const results = await Promise.all(
    routes.map(async (route) => {
      try {
        await navigate(route);
        return { route, success: true };
      } catch (error) {
        console.error(`Navigation failed for route: ${route}`, error);
        return { route, success: false, error };
      }
    })
  );

  return results;
};

export const validateLinks = () => {
  const links = document.querySelectorAll('a');
  const results = Array.from(links).map(link => {
    const href = link.getAttribute('href');
    return {
      href,
      valid: href && (
        href.startsWith('/') || 
        href.startsWith('http') || 
        href.startsWith('tel:') || 
        href.startsWith('mailto:') ||
        href.startsWith('#')
      ),
      text: link.textContent
    };
  });

  const invalidLinks = results.filter(result => !result.valid);
  if (invalidLinks.length > 0) {
    console.warn('Invalid links found:', invalidLinks);
  }

  return results;
};