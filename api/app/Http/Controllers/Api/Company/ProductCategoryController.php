<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductCategoryStore;
use App\Http\Requests\Product\ProductCategoryUpdate;
use App\Repositories\ProductCategory\ProductCategoryEloquentRepository;
use App\Repositories\ProductCategory\ProductCategoryRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProductCategoryController extends Controller
{
    /***
     * @var ProductCategoryRepositoryInterface | ProductCategoryEloquentRepository
     */
    private $categoryRepository;

    public function __construct(ProductCategoryRepositoryInterface $categoryRepository)
    {
        $this->categoryRepository = $categoryRepository;
    }

    public function index(Request $request)
    {
        $filter = $request->all();

        $filter['salon_id'] = Auth::guard('company')->user()->salon_id;


        $order = [];

        if ($request->input('order_by')) {
            $order[$request->get('order_by')] = $request->get('order_type', 'desc');
        }

        $categories = $this->categoryRepository->getByFilter($filter, $order);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'categories' => $categories,
            ]
        ]);
    }


    public function store(ProductCategoryStore $request)
    {
        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $newCategory = $this->categoryRepository->create($data);


        return response()->json([
            'message' => 'Add success',
            'data' => [
                'category' => $newCategory,
            ]
        ]);
    }

    public function show($id)
    {
        $newCategory = $this->categoryRepository->find($id);


        return response()->json([
            'message' => 'Get success',
            'data' => [
                'category' => $newCategory,
            ]
        ]);
    }

    public function update(ProductCategoryUpdate $request, $id)
    {
        $data = $request->all();

        $category = $this->categoryRepository->find($id);

        if ($category->salon_id != Auth::guard('company')->user()->salon_id) {
            throw new NotFoundHttpException();
        }

        $updateCategory = $this->categoryRepository->update($id, $data);


        return response()->json([
            'message' => 'Add success',
            'data' => [
                'category' => $updateCategory,
            ]
        ]);
    }

    public function destroy()
    {

    }
}
