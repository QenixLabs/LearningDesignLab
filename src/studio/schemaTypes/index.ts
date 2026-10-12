import { siteSettings } from './singletons/siteSettings';
import { homePage } from './singletons/homePage';
import { communityPage } from './singletons/communityPage';
import { servicePage } from './singletons/servicePage';
import { pageCopy } from './singletons/pageCopy';
import { teamMember } from './collections/teamMember';
import { project } from './collections/project';
import { caseStudy } from './collections/caseStudy';
import { publication } from './collections/publication';
import { conference } from './collections/conference';
import { testimonial } from './collections/testimonial';

export const schemaTypes = [
  siteSettings,
  homePage,
  communityPage,
  servicePage,
  pageCopy,
  teamMember,
  project,
  caseStudy,
  publication,
  conference,
  testimonial,
];
