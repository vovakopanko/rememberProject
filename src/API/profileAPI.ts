import { instance } from "./instance";

type contactsType = {
  skype: null | string;
  vk: null | string;
  facebook: null | string;
  icq: null | string;
  email: null | string;
  googlePlus: null | string;
  twitter: null | string;
  instagram: null | string;
  whatsApp: null | string;
};

type profileType = {
  aboutMe: null | string;
  contacts: null | contactsType;
  lookingForAJob: null | boolean;
  lookingForAJobDescription: null | string;
  fullName: null | string;
  userId: null | number;
  photos: null | photosType;
};

type photosType = {
  small: string | null;
  large: string | null;
};

export const profileAPI = {
    getUser(userId:number) {
      return instance.get(`profile/${userId}`).then((Response) => Response.data);
    },
    getStatus(userId:number) {
      return instance
        .get(`/profile/status/${userId}`)
        .then((Response) => Response.data);
    },
    updateStatus(body:string) {
      return instance
        .put(`/profile/status`, { status: body })
        .then((Response) => Response.data);
    },
    setUserPhoto(photo:any) {
      const formData = new FormData();
      formData.append("image", photo);
      return instance
        .put("/profile/photo", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((Response) => Response.data);
    },
    UpdateInfo(profile:profileType) {
      return instance.put(`/profile`, profile);
    },
  };