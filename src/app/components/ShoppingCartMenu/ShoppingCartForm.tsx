"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "@/app/Utilities/ExtraInfo";
import Button from "../ButtonComponentFolder/Button";

type Props = {
  onSubmit: (data: FormValues) => void;
  formData: FormValues | undefined;
};

export default function ShoppingCartForm({ onSubmit, formData }: Props) {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5 pb-10"
      >
        <div className="flex flex-col w-full">
          <label className="ml-2.5 mb-1 text-xs" htmlFor="country">
            Land
          </label>
          <select
            id="country"
            className="border-[1px] border-black rounded-md px-5 py-2.5"
            {...register("country", {
              required: {
                value: true,
                message: "Fältet är obligatoriskt",
              },
            })}
          >
            <option defaultValue="SE">Sverige</option>
            <option defaultValue="DE">Danmark</option>
            <option defaultValue="FI">Finland</option>
            <option defaultValue="NO">Norge</option>
            <option defaultValue="UK">United Kingdom</option>
          </select>
        </div>
        <div className="flex justify-between space-x-4 w-full">
          <div className="w-full relative">
            <label className="ml-2.5 mb-1 text-xs" htmlFor="email">
              E-post *
            </label>
            <input
              defaultValue={formData?.email}
              type="email"
              className="border-[1px] border-black rounded-md w-full px-3 py-2"
              placeholder="E-post"
              id="email"
              {...register("email", {
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "E-post är ogiltig",
                },
                validate: (fieldValue) => {
                  return fieldValue !== "" || "Fältet är obligatoriskt";
                },
              })}
            />
            <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
              {errors.email?.message}
            </span>
          </div>
          <div className="w-full relative">
            <label className="ml-2.5 mb-1 text-xs" htmlFor="phoneNumber">
              Telefonnummer *
            </label>
            <input
              defaultValue={formData?.phoneNumber}
              type="number"
              className="border-[1px] border-black rounded-md w-full px-3 py-2"
              placeholder="Telefonnummer"
              id="phoneNumber"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Fältet är obligatoriskt",
                },
              })}
            />
            <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
              {errors.phoneNumber?.message}
            </span>
          </div>
        </div>
        <div className="flex justify-between space-x-4 w-full">
          <div className="w-full relative">
            <label className="ml-2.5 mb-1 text-xs" htmlFor="firstname">
              Förnamn *
            </label>
            <input
              defaultValue={formData?.firstname}
              type="text"
              className="border-[1px] border-black rounded-md w-full px-3 py-2"
              placeholder="Förnamn"
              id="firstname"
              {...register("firstname", {
                required: {
                  value: true,
                  message: "Fältet är obligatoriskt",
                },
                validate: (fieldValue) => {
                  return fieldValue !== "" || "Fältet är obligatoriskt";
                },
              })}
            />
            <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
              {errors.firstname?.message}
            </span>
          </div>
          <div className="w-full relative">
            <label className="ml-2.5 mb-1 text-xs" htmlFor="lastname">
              Efternamn *
            </label>
            <input
              defaultValue={formData?.lastname}
              type="text"
              className="border-[1px] border-black rounded-md w-full px-3 py-2"
              placeholder="Efternamn"
              id="lastname"
              {...register("lastname", {
                required: {
                  value: true,
                  message: "Fältet är obligatoriskt",
                },
                validate: (fieldValue) => {
                  return fieldValue !== "" || "Fältet är obligatoriskt";
                },
              })}
            />
            <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
              {errors.lastname?.message}
            </span>
          </div>
        </div>
        <div className="flex flex-col w-full relative">
          <label className="ml-2.5 mb-1 text-xs" htmlFor="address1">
            Gatuadress *
          </label>
          <input
            defaultValue={formData?.address1}
            type="text"
            className="border-[1px] border-black rounded-md px-3 py-2"
            placeholder="Gatuadress"
            id="address1"
            {...register("address1", {
              required: {
                value: true,
                message: "Fältet är obligatoriskt",
              },
              validate: (fieldValue) => {
                return fieldValue !== "" || "Fältet är obligatoriskt";
              },
            })}
          />
          <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
            {errors.address1?.message}
          </span>
        </div>
        <div className="flex flex-col w-full">
          <label className="ml-2.5 mb-1 text-xs" htmlFor="address2">
            Lägenhet, svit, etc.(valfritt)
          </label>
          <input
            defaultValue={formData?.address2}
            type="text"
            className="border-[1px] border-black rounded-md px-3 py-2"
            placeholder="Lägenhet, svit, etc.(valfritt)"
            id="address2"
            {...register("address2")}
          />
          <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
            {errors.address2?.message}
          </span>
        </div>
        <div className="flex justify-between space-x-4 w-full">
          <div className="w-full relative">
            <label className="ml-2.5 mb-1 text-xs" htmlFor="zipcode">
              Postnummer *
            </label>
            <input
              defaultValue={formData?.zipcode}
              type="number"
              className="border-[1px] border-black rounded-md px-3 py-2 w-full"
              placeholder="Postnummer"
              id="zipcode"
              {...register("zipcode", {
                required: {
                  value: true,
                  message: "Fältet är obligatoriskt",
                },
              })}
            />
            <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
              {errors.zipcode?.message}
            </span>
          </div>
          <div className="w-full relative">
            <label className="ml-2.5 mb-1 text-xs" htmlFor="city">
              Stad *
            </label>
            <input
              defaultValue={formData?.city}
              type="text"
              className="border-[1px] border-black rounded-md px-3 py-2 w-full"
              placeholder="Stad"
              id="city"
              {...register("city", {
                required: {
                  value: true,
                  message: "Fältet är obligatoriskt",
                },
                validate: (fieldValue) => {
                  return fieldValue !== "" || "Fältet är obligatoriskt";
                },
              })}
            />
            <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
              {errors.city?.message}
            </span>
          </div>
        </div>
        <div className="flex items-center">
          <input
            defaultChecked={formData?.membershipRegistration || false}
            type="checkbox"
            id="membershipRegistration"
            {...register("membershipRegistration")}
            className="size-5 accent-c-Purple"
          />
          <div className="ml-2.5">
            <label htmlFor="membershipRegistration" className="text-sm">
              Jag vill bli medlem i kundklubben{" "}
              <a className="underline" href="">
                Läs medlemsvillkor
              </a>
            </label>
          </div>
        </div>
        <div className="flex items-center relative">
          <input
            defaultChecked={formData?.termsAndConditions || false}
            type="checkbox"
            id="termsAndConditions"
            {...register("termsAndConditions", {
              validate: (fieldValue: boolean) => {
                return fieldValue === true || "Fältet är obligatoriskt";
              },
            })}
            className="size-5 accent-c-Purple"
          />
          <span className="text-c-Red italic text-sm mt-1 absolute -bottom-5 left-0">
            {errors.termsAndConditions?.message}
          </span>
          <div className="ml-2.5">
            <label htmlFor="termsAndConditions" className="text-sm">
              Acceptera våra{" "}
              <a className="underline" href="">
                köpvillkor
              </a>
            </label>
          </div>
        </div>
        <div className="pt-5">
          <Button variant="black" submit className="w-full">
            Fortsätt till betalning
          </Button>
        </div>
      </form>
    </>
  );
}
