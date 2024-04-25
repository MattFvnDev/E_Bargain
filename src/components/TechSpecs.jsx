import React from "react"
import { FaMemory } from "react-icons/fa"
import { FaMobileScreen, FaMicrochip } from "react-icons/fa6"
import { MdStorage, MdCameraRear, MdCameraFront } from "react-icons/md"

const TechSpecs = ({
  memoryCapacity, display, ram, chip, cameraMain, cameraFront, operatingSystem
}) => {
  return (
    <div className="mt-4 border-t pt-4 flex flex-col space-y-2 lg:space-y-3">
      <p className="text-gray-500">Tech Specs:</p>
      <div className="flex flex-row items-center space-x-3">
        <MdStorage className="text-red-700 w-5 h-5 flex-shrink-0" />
        <p className="text-xl font-semibold">{memoryCapacity} GB</p>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <FaMobileScreen className="text-red-700 w-5 h-5 flex-shrink-0" />
        <p className="text-xl font-semibold">{display}&Prime;</p>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <FaMemory className="text-red-700 w-5 h-5 flex-shrink-0" />
        <p className="text-xl font-semibold">{ram} GB</p>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <FaMicrochip className="text-red-700 w-5 h-5 flex-shrink-0" />
        <p className="text-xl font-semibold">{chip}</p>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <MdCameraRear className="text-red-700 w-5 h-5 flex-shrink-0" />
        <p className="text-xl font-semibold">{cameraMain}</p>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <MdCameraFront className="text-red-700 w-5 h-5 flex-shrink-0" />
        <p className="text-xl font-semibold">{cameraFront}</p>
      </div>
      <div className="mt-4 border-t pt-4">
        <p className="text-gray-500">Operating system:</p>
        <p className="text-xl font-semibold ">{operatingSystem}</p>
      </div>
    </div>
  )
}

export default TechSpecs
