export interface SkillTrack {
  n: string
  slug: string
  title: string
  desc: string
  stack: string[]
  weeks: number
}

export interface Pathway {
  tag: string
  title: string
  desc: string
  meta: string
  detail: string
}

export const tracks: SkillTrack[] = [
  {
    n: '01',
    slug: 'mcp-connectors',
    title: 'MCP & Connectors',
    desc: 'Build connectors for industrial protocols (OPC-UA, MQTT, BACnet) and business systems.',
    stack: ['opc-ua', 'mqtt', 'bacnet', 'modbus-tcp', 'rest', 'graphql'],
    weeks: 4,
  },
  {
    n: '02',
    slug: 'industrial-integration',
    title: 'Industrial System Integration',
    desc: 'Bridge OT and IT — PLCs, MES, ERP, CMMS.',
    stack: ['siemens-s7', 'allen-bradley', 'sap-erp', 'maximo', 'ignition'],
    weeks: 4,
  },
  {
    n: '03',
    slug: 'edge-ai-agents',
    title: 'Edge AI & Agents',
    desc: 'Deploy agents at the edge with real sensor data.',
    stack: ['nvidia-jetson', 'onnx', 'claude-haiku', 'vector-store', 'mqtt'],
    weeks: 4,
  },
  {
    n: '04',
    slug: 'cloud-native-ops',
    title: 'Cloud-Native AI Ops',
    desc: 'Deploy, monitor, and scale AI workloads in production.',
    stack: ['k8s', 'otel', 'prometheus', 'aws-greengrass', 'azure-iot'],
    weeks: 4,
  },
]

export const pathways: Pathway[] = [
  {
    tag: 'PATHWAY_01',
    title: 'Join our project network',
    desc: 'Contractors and partners on real client work.',
    meta: 'rolling intake',
    detail:
      'Top-cohort builders are invited into the ai365 partner pool — paid project work with our existing industrial clients.',
  },
  {
    tag: 'PATHWAY_02',
    title: 'Get hired into industry',
    desc: 'Placement support to AI/IoT roles at industrial companies.',
    meta: 'post-graduation',
    detail:
      'Direct intros to hiring managers at manufacturing, automotive, smart-building, and smart-city companies in our network.',
  },
  {
    tag: 'PATHWAY_03',
    title: 'Level up at your company',
    desc: 'Corporate cohorts for internal teams.',
    meta: 'private cohorts',
    detail:
      'We run private 6–12 week cohorts for engineering teams, scoped to your stack and a real internal project.',
  },
]
