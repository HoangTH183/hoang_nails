<?php

namespace App\Http\Controllers\Api\Company;

use App\Http\Controllers\Controller;
use App\Http\Requests\Service\ServiceStore;
use App\Http\Requests\Service\ServiceUpdate;
use App\Repositories\Service\ServiceEloquentRepository;
use App\Repositories\Service\ServiceRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class ServiceController extends Controller
{

    /***
     * @var ServiceRepositoryInterface | ServiceEloquentRepository
     *
     */
    private $serviceRepository;

    public function __construct(ServiceRepositoryInterface $serviceRepository)
    {
        $this->serviceRepository = $serviceRepository;
    }


    public function index(Request $request)
    {

        $filter = $request->all();

        $filter['salon_id'] = Auth::guard('company')->user()->salon_id;

        $order = [];

        if ($request->input('order_by')) {
            $order[$request->get('order_by')] = $request->get('order_type', 'desc');
        }

        $service = $this->serviceRepository->getByFilter($filter, $order);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'service' => $service,
            ]
        ]);
    }


    public function store(ServiceStore $request)
    {
        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $service = $this->serviceRepository->create($data);


        return response()->json([
            'message' => 'Add success',
            'data' => [
                'service' => $service,
            ]
        ]);
    }


    public function show($id)
    {
        $service = $this->serviceRepository->find($id);


        if (!$service) {
            throw new NotFoundHttpException();
        }

        if ($service->salon_id != Auth::guard('company')->user()->salon_id) {
            throw new NotFoundHttpException();
        }

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'service' => $service,
            ]
        ]);
    }

    public function update(ServiceUpdate $request, $id)
    {
        $service = $this->serviceRepository->find($id);


        if (!$service) {
            throw new NotFoundHttpException();
        }

        if ($service->salon_id != Auth::guard('company')->user()->salon_id) {
            throw new NotFoundHttpException();
        }

        $data = $request->all();

        $data['salon_id'] = Auth::guard('company')->user()->salon_id;

        $this->serviceRepository->update($id, $data);

        return response()->json([
            'message' => 'Get success',
            'data' => [
                'service' => $service,
            ]
        ]);
    }


    public function destroy($id)
    {

    }
}
