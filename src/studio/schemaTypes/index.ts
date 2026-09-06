import { siteSettings } from './singletons/siteSettings';
import { homePage } from './singletons/homePage';
import { servicePage } from './singletons/servicePage';
import { pageCopy } from './singletons/pageCopy';
import { teamMember } from './collections/teamMember';
import { project } from './collections/project';
import { publication } from './collections/publication';
import { conference } from './collections/conference';
import { testimonial } from './collections/testimonial';

export const schemaTypes = [
  siteSettings,
  homePage,
  servicePage,
  pageCopy,
  teamMember,
  project,
  publication,
  conference,
  testimonial,
];
