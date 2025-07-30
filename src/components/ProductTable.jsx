// import LoadingComponent from "@/app/loading";
// import { useState, useEffect } from "react";
// import DataTable from "react-data-table-component";
// import { BASE_API_URL } from "@/constant/BASE_URL";
// import {
//   Dropdown,
//   DropdownTrigger,
//   DropdownMenu,
//   DropdownItem,
//   // useDisclosure,
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
// } from "@nextui-org/react";
// import Image from "next/image";
// import { IoEllipsisHorizontal } from "react-icons/io5";
// // import { useRouter } from "next/navigation";
// import EditProductForm from "../forms/EditProductForm";
// import { accessToken } from "@/types/token";

// const paginationComponentOptions = {
//   rowsPerPageText: "Row Per Page",
//   rangeSeparatorText: "of",
//   selectAllRowsItem: true,
//   selectAllRowsItemText: "All",
// };

// export default function ProductTable() {
//   const [getData, setData] = useState([]);
//   const [data, setDataDelete] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState([]);
//   const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
//   const [isEditModalOpen, setIsEditModalOpen] = useState(false);
//   const [productDetail, setProductDetail] = useState({});
//   const [productEdit, setProductEdit] = useState({});
//   const [setButtonDelete] = useState(false); // getDeleteData

//   const handleDetail = (value) => {
//     setProductDetail(value);
//     setIsDetailModalOpen(true);
//   };

//   const handleEdit = (value) => {
//     setProductEdit(value);
//     setIsEditModalOpen(true);
//   };

//   const handleDelete = (product) => {
//     const id = product.id;
//     fetch(`${BASE_API_URL}products/${id}/`, {
//       method: "DELETE",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `${accessToken}`,
//       },
//     });
//     setDataDelete(data.filter((p) => p.id !== id));
//   };

//   // const route = useRouter();

//   const columns = [
//     {
//       name: "ID",
//       selector: (row) => (
//         <div className="font-bold text-blue-600">{row.id}</div>
//       ),
//     },
//     {
//       name: "Name",
//       selector: (row) => row.name,
//     },
//     {
//       name: "Price",
//       selector: (row) => row.price,
//     },
//     {
//       name: "Image",
//       selector: (row) => (
//         <Image src={row.image} width={80} height={80} alt="product" />
//       ),
//     },
//     {
//       name: "Action",
//       cell: (row) => (
//         <div className="rounded-[50%] bg-gray-50 w-max p-2">
//           <Dropdown>
//             <DropdownTrigger>
//               <button>
//                 <IoEllipsisHorizontal />
//               </button>
//             </DropdownTrigger>
//             <DropdownMenu aria-label="Static Actions">
//               <DropdownItem
//                 className="w-max font-bold text-green-400"
//                 key="detail"
//                 onClick={() => handleDetail(row)}
//               >
//                 View Detail
//               </DropdownItem>
//               <DropdownItem
//                 key="edit"
//                 onClick={() => handleEdit(row)}
//                 className="w-max font-bold text-orange-700"
//               >
//                 Edit
//               </DropdownItem>
//               <DropdownItem
//                 key="delete"
//                 className="w-max hover:rounded-xl font-bold text-red-400 hover:bg-red-400 hover:font-bold hover:text-white"
//                 color="danger"
//                 onClick={() => handleDelete(row)}
//               >
//                 Delete
//               </DropdownItem>
//             </DropdownMenu>
//           </Dropdown>
//         </div>
//       ),
//     },
//   ];

//   useEffect(() => {
//     fetch(`${BASE_API_URL}products/?page=1&page_size=1000`)
//       .then((res) => res.json())
//       .then((data) => {
//         const result = data.results;
//         setData(result);
//         const isSeller = result.some(
//           (pro) => pro.seller === "Sokcheat Srorng"
//         );
//         setButtonDelete(isSeller);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   useEffect(() => {
//     fetch(`${BASE_API_URL}products/?page=1&page_size=1000`)
//       .then((res) => res.json())
//       .then((data) => {
//         const result = data.results;
//         setData(result);
//       });
//     setIsLoading(false);
//   }, []);

//   useEffect(() => {
//     if (!search) {
//       setFilter(getData);
//       return;
//     }
//     const result = getData.filter((item) => {
//       return item.name?.toLowerCase().includes(search.toLowerCase());
//     });
//     setFilter(result);
//   }, [getData, search]);

//   return (
//     <>
//       <div className="flex flex-col w-[340px] pt-2 m-auto text-center sm:mx-7 sm:w-[700px]  mg:w-[1000px] lg:w-[1200px]  lg:justify-between lg:flex h-max bg-[whitesmoke]">
//         <Modal
//           isOpen={isDetailModalOpen}
//           onClose={() => setIsDetailModalOpen(false)}
//         >
//           <ModalContent>
//             {(onClose) => (
//               <>
//                 <ModalHeader>Product View</ModalHeader>
//                 <ModalBody>
//                   <p>
//                     Name:
//                     {productDetail.name}
//                   </p>
//                   <p>
//                     Price:
//                     {productDetail.price}
//                   </p>
//                   <p>
//                     Description:
//                     {productDetail.desc}
//                   </p>
//                   <p>
//                     Quantity:
//                     {productDetail.quantity}
//                   </p>
//                   <img
//                     src={productDetail.image}
//                     width={100}
//                     height={100}
//                     alt="Products"
//                   />
//                   <button onClick={onClose}>Close</button>
//                 </ModalBody>
//               </>
//             )}
//           </ModalContent>
//         </Modal>
//         <Modal
//           isOpen={isEditModalOpen}
//           onClose={() => setIsEditModalOpen(false)}
//         >
//           <ModalContent>
//             {(onClose) => (
//               <>
//                 <ModalHeader className="flex flex-col gap-1">
//                   Product View
//                 </ModalHeader>
//                 <ModalBody>
//                   <EditProductForm product={productEdit} />
//                   <button onClick={onClose}>Close</button>
//                 </ModalBody>
//               </>
//             )}
//           </ModalContent>
//         </Modal>
//         <DataTable
//           selectableRows
//           progressPending={isLoading}
//           columns={columns}
//           fixedHeader={true}
//           fixedHeaderScrollHeight="500px"
//           pagination
//           paginationComponentOptions={paginationComponentOptions}
//           subHeader
//           subHeaderComponent={
//             <input
//               className="border-[1px] px-4 py-2 w-full rounded-md border-blue-400"
//               placeholder="Search"
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           }
//           progressComponent={<LoadingComponent />}
//           data={filter}
//         />
//       </div>
//     </>
//   );
// }