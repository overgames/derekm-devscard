import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
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

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        java({ level: 4 }),
        springBoot({ level: 4 }),
        kafka({ level: 3 }),
        mongoDb({ level: 4 }),
        awsDocumentdb({ level: 4 }),
        postgreSql({ level: 2 }),
        k8s({ level: 2 }),
        docker({ level: 2 }),
        dataDog({ level: 3 }),
        angular({ level: 3 }),
        typescript({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [astro(), firebase()],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
