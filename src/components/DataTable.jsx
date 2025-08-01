
// import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

// export default function DataTableComponent({image, title, description, price, tags}) {
//     return (
//         <div className="overflow-x-auto p-8">
//             <Table striped>
//                 {/* header */}
//                 <TableHead>
//                     <TableHeadCell>Photo</TableHeadCell>
//                     <TableHeadCell>title</TableHeadCell>
//                     <TableHeadCell>description</TableHeadCell>
//                     <TableHeadCell>tags</TableHeadCell>
//                     <TableHeadCell>price</TableHeadCell>
//                     <TableHeadCell>
//                         <span className="sr-only">Edit</span>
//                     </TableHeadCell>
//                 </TableHead>
//                 {/* body data */}
//                 <TableBody >

//                     <TableRow >
//                         {/* image */}
//                          <TableCell>
//                             <img src={image} alt={title} width={80} height={80}/>
//                          </TableCell>
//                          {/* title */}
//                         <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
//                             {title}
//                         </TableCell>
//                         {/* description */}
//                         <TableCell>{description}</TableCell>
//                         {/* tags */}
//                         <TableCell>{tags}</TableCell>
//                         {/* price */}
//                         <TableCell>${price}</TableCell>
//                         {/* action */}
//                         <TableCell>
//                             <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
//                                 Edit
//                             </a>
//                         </TableCell>
//                     </TableRow>
//                 </TableBody>
//             </Table>
//         </div>
//     );
// }


import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function DataTableComponent({props}) {
  return (
    <div className="overflow-x-auto p-8">
      <Table striped>
        {/* Table Header - Rendered only once */}
        <TableHead>
          <TableRow>
            <TableHeadCell>Photo</TableHeadCell>
            <TableHeadCell>Title</TableHeadCell>
            <TableHeadCell>Description</TableHeadCell>
            <TableHeadCell>Tags</TableHeadCell>
            <TableHeadCell>Price</TableHeadCell>
            <TableHeadCell>
              <span className="sr-only">Edit</span>
            </TableHeadCell>
          </TableRow>
        </TableHead>

        {/* Table Body - Renders one row per product */}
        <TableBody>
            {
              (props || []).map((product, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={product.thumbnail} alt={product.title} width={80} height={80} />
                  </TableCell>
                  <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {product.title}
                  </TableCell>
                  <TableCell>{product.description}</TableCell>
                  <TableCell>{product.tags.join(', ')}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              ))
            }
        </TableBody>
      </Table>
    </div>
  );
}
