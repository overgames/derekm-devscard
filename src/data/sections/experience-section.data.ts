import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  angular,
  astro,
  awsDocumentdb,
  dataDog,
  docker,
  firebase,
  java,
  k8s,
  kafka,
  mongoDb,
  postgreSql,
  springBoot,
  typescript,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Software Developer',
      company: 'Charter Communications',
      image: import('@/assets/logos/charter--600.png'),
      dates: [new Date('2022-08'), null],
      description: `
      Developed, tested, and maintained data-caching microservice applications.
        - Implemented new features for improving functionality/performance for various components.
        - Implemented various HTTP endpoints for communication across platform ecosystem.
        - Upgraded core microservice components from Java 8 to Java 17.
        - Practiced test-driven development by writing and utilizing unit tests, regression tests, and validation applications.
        - Supported multiple deployment efforts for new releases.
        - Practiced scrum/agile with daily standups and frequent retros.
        - Planned and documented ongoing development efforts utilizing tools such as Chalk and Jira.
        - Improved and refactored regression suites and common code base across multiple components.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [java(), springBoot(), kafka(), mongoDb(), k8s(), docker(), dataDog()],
      },
    },
    {
      role: 'SDIT Java Developer',
      company: 'Dish Network',
      image: import('@/assets/logos/dish-logo.png'),
      dates: [new Date('2021-08'), new Date('2022-08')],
      description: `
        - Aenean eget ultricies felis. Pellentesque dictum massa ut tellus eleifend, sed posuere massa mattis.
        - Ut posuere massa lacus, eleifend molestie tortor auctor vel.
        - Sed sed sollicitudin eros, id ultricies mi. Aliquam sodales elit vel ante tempor, non vehicula nibh facilisis.
        - Cras feugiat ultricies maximus. Aliquam tristique ex odio, ac semper urna accumsan a.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), firebase()],
      },
    },
    {
      role: 'Full-Stack Java Developer',
      company: 'Revature',
      image: import('@/assets/logos/revature-logo.png'),
      dates: [new Date('2021-03'), new Date('2021-08')],
      description: `
        Nulla volutpat justo ante, rhoncus posuere massa egestas in:

        - Quisque pellentesque, dolor nec sollicitudin iaculis, sem velit consequat ligula, eget tempus ligula leo et est.
        - Maecenas ut elit sit amet nibh maximus condimentum in nec lorem. Pellentesque tincidunt odio vel leo suscipit, in interdum mi gravida.

        Donec non vulputate augue 🤓
      `,
      tagsList: {
        title: 'Technologies',
        tags: [typescript(), firebase()],
      },
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
