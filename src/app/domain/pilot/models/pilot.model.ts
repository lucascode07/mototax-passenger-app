export interface Pilot {
  name: string;
  lastname: string;
  fechaNacimiento: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  cellphone: string;
  profilePhoto: PictureBody;
  driverLicense: DriverLicenseBody;
  vehicles: VehiclesBody;
}

export interface DriverLicenseBody {
  data: DriverLicenseData;
}

export interface DriverLicenseData {
  id: number;
  attributes: DriverLicense;
}

export interface DriverLicense {
  licenseNumber: string;
  expirationDate: string;
  frontPhoto: PictureBody;
  backPhoto: PictureBody;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface PictureBody {
  data: PictureData;
}

export interface PictureData {
  id: number;
  attributes: Picture;
}

export interface Picture {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface Formats {
  thumbnail: Small;
  small: Small;
}

export interface Small {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
}

export interface VehiclesBody {
  data: VehiclesData[];
}

export interface VehiclesData {
  id: number;
  attributes: Vehicle;
}

export interface Vehicle {
  licensePlate: string;
  year: string;
  photo: PictureBody;
  circulationCardFront: PictureBody;
  circulationCardBack: PictureBody;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
