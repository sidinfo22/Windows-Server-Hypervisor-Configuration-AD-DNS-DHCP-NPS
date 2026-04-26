export const pagePathByFile = {
  'index.html': '/',
  'objectives.html': '/objectives',
  'assets.html': '/deploy',
  'deploy.html': '/deploy',
  'diagrams.html': '/deploy',
  'segmentation.html': '/deploy',
  'voip.html': '/voip',
  'cloud.html': '/deploy',
  'programming.html': '/voip',
  'cybersecurity.html': '/hippa',
  'hippa.html': '/hippa',
  'strategies.html': '/objectives',
};

export const pages = [
  {
    slug: 'index',
    route: '/',
    fileName: 'index.html',
    title: 'Windows Server 2022 Enterprise Domain Configuration | Summit Care Medical Clinic',
  },
  {
    slug: 'objectives',
    route: '/objectives',
    fileName: 'objectives.html',
    title: 'Domain Foundation, AD DS, DNS & Domain Controllers | Summit Care Architecture',
  },
  {
    slug: 'deploy',
    route: '/deploy',
    fileName: 'deploy.html',
    title: 'DHCP, DNS Records, WDS & Storage Services | Summit Care Architecture',
  },
  {
    slug: 'voip',
    route: '/voip',
    fileName: 'voip.html',
    title: 'Group Policy, NPS/RADIUS, Certificates & SSO | Summit Care Architecture',
  },
  {
    slug: 'hippa',
    route: '/hippa',
    fileName: 'hippa.html',
    title: 'Hypervisors, VDI, Automation & Final Benefits | Summit Care Architecture',
  },
];
