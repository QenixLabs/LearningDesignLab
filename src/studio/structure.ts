import type { StructureResolver } from 'sanity/structure';
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

const SERVICE_PAGES = [
  { id: 'servicePage-course-development', title: 'Courses & Curriculums' },
  { id: 'servicePage-faculty-enrichment', title: 'Faculty Enrichment' },
  { id: 'servicePage-research-evaluation', title: 'Research & Evaluation' },
  { id: 'servicePage-advisory', title: 'Advisory' },
];

const PAGE_COPY = [
  { id: 'pageCopy-team', title: 'Team page' },
  { id: 'pageCopy-projects', title: 'Projects page' },
  { id: 'pageCopy-publications', title: 'Publications page' },
  { id: 'pageCopy-conferences', title: 'Conferences page' },
];

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('LDLab Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('homePage').documentId('homePage')),
      S.listItem()
        .title('Service Pages')
        .child(
          S.list()
            .title('Service Pages')
            .items(
              SERVICE_PAGES.map((p) =>
                S.listItem()
                  .title(p.title)
                  .child(S.document().schemaType('servicePage').documentId(p.id))
              )
            )
        ),
      S.listItem()
        .title('Page Copy')
        .child(
          S.list()
            .title('Page Copy')
            .items(
              PAGE_COPY.map((p) =>
                S.listItem()
                  .title(p.title)
                  .child(S.document().schemaType('pageCopy').documentId(p.id))
              )
            )
        ),
      S.divider(),
      orderableDocumentListDeskItem({ type: 'teamMember', title: 'Team Members', S, context }),
      orderableDocumentListDeskItem({ type: 'project', title: 'Projects', S, context }),
      orderableDocumentListDeskItem({ type: 'publication', title: 'Publications', S, context }),
      orderableDocumentListDeskItem({ type: 'conference', title: 'Conferences', S, context }),
      orderableDocumentListDeskItem({ type: 'testimonial', title: 'Testimonials', S, context }),
    ]);
