import ContactList from "@/components/common/contact-list";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Logo from "@/components/common/logo";
import ProfileInfo from "./components/profile-info";
import apiClient from "@/lib/api-client";
import {
  GET_CONTACTS_WITH_MESSAGES_ROUTE,
  GET_USER_CHANNELS,
} from "@/lib/constants";
import { useEffect } from "react";
import { useAppStore } from "@/store";
import NewDM from "./components/new-dm/new-dm";
import CreateChannel from "./components/create-channel/create-channel";

const ContactsContainer = () => {
  const {
    setDirectMessagesContacts,
    directMessagesContacts,
    channels,
    setChannels,
  } = useAppStore();

  useEffect(() => {
    const getContactsWithMessages = async () => {
      const response = await apiClient.get(GET_CONTACTS_WITH_MESSAGES_ROUTE, {
        withCredentials: true,
      });
      if (response.data.contacts) {
        setDirectMessagesContacts(response.data.contacts);
      }
    };
    getContactsWithMessages();
  }, [setDirectMessagesContacts]);

  useEffect(() => {
    const getChannels = async () => {
      const response = await apiClient.get(GET_USER_CHANNELS, {
        withCredentials: true,
      });
      if (response.data.channels) {
        setChannels(response.data.channels);
      }
    };
    getChannels();
  }, [setChannels]);

  return (
    <>
      <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#202d32] border-r-2 border-[#2f303b] w-full">
        <div className=" pt-3">
          <Logo />
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="bg-transparent rounded-none w-full ">
            <TabsTrigger
              className="data-[state=active]:bg-transparent text-white text-opacity-90 border-b-2    rounded-none w-full data-[state=active]:text-green  data-[state=active]:font-semibold data-[state=active]:border-b-green-500 p-3 transition-all duration-300"
              value="login"
            >
              Personal Chats
            </TabsTrigger>
            <TabsTrigger
              className="data-[state=active]:bg-transparent text-white text-opacity-90 border-b-2   rounded-none w-full data-[state=active]:text-green  data-[state=active]:font-semibold data-[state=active]:border-b-green-500 p-3 transition-all duration-300 "
              value="signup"
            >
              Group Chats
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="flex flex-col gap-5 mt-10">
            <div className="my-5">
              <div className="flex items-center justify-between pr-10">
                <Title text="Direct Messages" />
                <NewDM />
              </div>
              <div className="max-h-[38vh] overflow-y-auto scrollbar-hidden">
                <ContactList contacts={directMessagesContacts} />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="signup" className="flex flex-col gap-5 ">
            <div className="my-5">
              <div className="flex items-center justify-between pr-10">
                <Title text="Channels" />
                <CreateChannel />
              </div>
              <div className="max-h-[37vh] overflow-y-auto scrollbar-hidden pb-5">
                <ContactList contacts={channels} isChannel />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        <ProfileInfo />
      </div>
    </>
  );
};

export default ContactsContainer;

const Title = ({ text }) => {
  return (
    <h6 className="uppercase tracking-widest text-neutral-400 pl-10 font-light text-opacity-90 text-sm">
      {text}
    </h6>
  );
};
