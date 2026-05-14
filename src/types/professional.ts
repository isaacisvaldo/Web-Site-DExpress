import { City } from './city'
import { Course } from './course'
import { DesiredPosition } from './desiredPosition'
import { District } from './district'
import { ExperienceLevel } from './experienceLevel'
import { Gender } from './gender'
import { HighestDegree } from './highestDegree'
import { Language } from './language'
import { MaritalStatuses } from './maritalStatuses'
import { Skill } from './skill'

export type Profissional = {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  identityNumber: string
  isAvailable: boolean
  description: string
  expectedAvailability: string
  hasCriminalRecord: boolean
  hasMedicalCertificate: boolean
  hasTrainingCertificate: boolean
  locationId: string
  profileImage: string
  genderId: string
  birthDate: string
  hasChildren: boolean
  knownDiseases: string
  expectedSalary: number
  createdAt: string
  updatedAt: string
  jobApplicationId: string
  desiredPositionId: string
  availabilityTypeId: string
  experienceLevelId: string
  maritalStatusId: string
  highestDegreeId: string
  location: Location
  codeIdentifier: string
  desiredPosition: DesiredPosition
  gender: Gender
  jobApplication: JobApplication
  experienceLevel: ExperienceLevel
  maritalStatus: MaritalStatuses
  highestDegree: HighestDegree
  availability: any[]
  Document: any[]
  ProfessionalExperience: ProfessionalExperience[]
  professionalCourses: ProfessionalCourse[]
  professionalLanguages: ProfessionalLanguage[]
  professionalSkills: ProfessionalSkill[]
}

export type Location = {
  id: string
  cityId: string
  districtId: string
  street: string
  lat: any
  lng: any
  createdAt: string
  updatedAt: string
  city: City
  district: District
}

export type JobApplication = {
  id: string
  locationId: string
  fullName: string
  identityNumber: string
  phoneNumber: string
  optionalPhoneNumber: string
  desiredPositionId: string
  email: string
  birthDate: string
  genderId: string
  highestDegreeId: string
  maritalStatusId: string
  experienceLevelId: string
  generalAvailabilityId: string
  hasChildren: boolean
  knownDiseases: string
  availabilityDate: string
  status: string
  createdAt: string
  updatedAt: string
}

type ProfessionalExperience = {
  id: string
  localTrabalho: string
  cargo: string
  tempo: string
  createdAt: string
  updatedAt: string
}
type ProfessionalCourse = {
  professionalId: string
  courseId: string
  createdAt: string
  updatedAt: string
  course: Course
}
type ProfessionalLanguage = {
  professionalId: string
  languageId: string
  level: any
  language: Language
}

type ProfessionalSkill = {
  professionalId: string
  skillId: string
  skill: Skill
}

export type FiltersProfessional = {
  cityId?: string
  districtId?: string
  availabilityTypeId?: string
  specialtyId?: string
  search?: string
  page?: number
  limit?: number
  desiredPositionId?: string
}

export type PaginatedProfissionalResponse = {
  data: Profissional[]
  total: number
  page: number
  limit: number
  totalPages: number
}

export type ProfessionalDetails = {
  id: string
  fullName: string
  email: string
  phoneNumber: string
  isAvailable: boolean
  description: string
  expectedAvailability: string
  expectedSalary: number
  profileImage: string
  rating?: number
  reviewCount?: number
  completedJobs?: number
  location: {
    district: District
    city: City
  }
  desiredPosition: { label: string }
  experienceLevel: { label: string }
  professionalCourses: { course: Course }[]
  professionalLanguages: { language: Language }[]
  professionalSkills: { skill: Skill }[]
}
