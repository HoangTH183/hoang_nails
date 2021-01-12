<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductStore;
use App\Http\Requests\Product\ProductUpdate;
use App\Repositories\Product\ProductEloquentRepository;
use App\Repositories\Product\ProductRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ProductController extends Controller
{

    /***
     * @var ProductRepositoryInterface | ProductEloquentRepository
     *
     */
    private $productRepository;

    public function __construct(ProductRepositoryInterface $productRepository)
    {
        $this->productRepository = $productRepository;
    }


    public function index(Request $request)
    {

        $filter = $request->all();

        $filter['salon_id'] = Auth::guard('company')->user()->salon_id;

        $order = [];

        if ($request->input('order_by')) {
            $order[$request->get('order_by')] = $request->get('order_type', 'desc');
        }

        $product = $this->productRepository->getByFilter($filter, $order);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'product' => $product,
            ]
        ]);
    }


    public function store(ProductStore $request)
    {
        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $product = $this->productRepository->create($data);


        return response()->json([
            'message' => 'Add success',
            'data' => [
                'product' => $product,
            ]
        ]);
    }


    public function show($id)
    {
        $product = $this->productRepository->find($id);


        if (!$product) {
            throw new NotFoundHttpException();
        }

        if ($product->salon_id != Auth::guard('company')->user()->salon_id) {
            throw new NotFoundHttpException();
        }

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'product' => $product,
            ]
        ]);
    }

    public function update(ProductUpdate $request, $id)
    {
        $product = $this->productRepository->find($id);


        if (!$product) {
            throw new NotFoundHttpException();
        }

        if ($product->salon_id != Auth::guard('company')->user()->salon_id) {
            throw new NotFoundHttpException();
        }

        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $this->productRepository->update($id, $data);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'product' => $product,
            ]
        ]);
    }


    public function destroy($id)
    {

    }
}
