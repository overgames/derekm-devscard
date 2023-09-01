import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const angular = createSkillFactory({
  name: 'Angular',
  icon: 'devicon:angular',
  iconColor: '#FF5D01',
  url: 'https://angular.io/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const awsDocumentdb = createSkillFactory({
  name: 'Amazon DocumentDB',
  icon: 'logos:aws-documentdb',
  iconColor: '#FF5D01',
  url: 'https://aws.amazon.com/documentdb/',
});

export const dataDog = createSkillFactory({
  name: 'Datadog',
  icon: 'vscode-icons:file-type-datadog',
  iconColor: '#FF5D01',
  url: 'https://www.datadoghq.com/',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'skill-icons:docker',
  iconColor: '#FF5D01',
  url: 'https://www.docker.com/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const java = createSkillFactory({
  name: 'Java',
  icon: 'logos:java',
  iconColor: '#FFCA28',
  url: 'https://www.java.com/en/',
});

export const kafka = createSkillFactory({
  name: 'Apache Kafka',
  icon: 'skill-icons:kafka',
  iconColor: '#FFCA28',
  url: 'https://kafka.apache.org/',
});

export const k8s = createSkillFactory({
  name: 'Kubernetes',
  icon: 'logos:kubernetes',
  iconColor: '#FFCA28',
  url: 'https://kubernetes.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const springBoot = createSkillFactory({
  name: 'Spring Boot',
  icon: 'devicon:spring',
  iconColor: '#4169E1',
  url: 'https://spring.io/projects/spring-boot/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});
