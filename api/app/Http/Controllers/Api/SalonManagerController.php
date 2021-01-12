<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\SalonManager\SalonManagerStoreRequest;
use App\Http\Requests\SalonManager\SalonManagerUpdateRequest;
use App\Repositories\Salon\SalonEloquentRepository;
use App\Repositories\Salon\SalonRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\JsonResponse;

class SalonManagerController extends Controller
{
    /**
     * @var SalonRepositoryInterface | SalonEloquentRepository
     */
    private $salonRepository;

    public function __construct(SalonRepositoryInterface $salonRepository)
    {
        $this->salonRepository = $salonRepository;
    }

    public function index(Request $request)
    {

        $filter['owner_id'] = Auth::id();
        $request->get('name', null) ? $filter['name'] = $request->get('name') : null;


        $salon = $this->salonRepository->getByFilter($filter);


        return response()->json([
            'message' => 'Create success',
            'data' => [
                'salon' => $salon,
            ]
        ]);

    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return \Illuminate\Http\Response
     */
    public function store(SalonManagerStoreRequest $request)
    {
        $salon = $this->salonRepository->create($request->all());


        return response()->json([
            'message' => 'Create success',
            'data' => [
                'salon' => $salon,
            ]
        ]);

    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $salon = $this->salonRepository->find($id);

        if ($salon) {
            return response()->json([
                'message' => 'get success',
                'data' => [
                    'salon' => $salon,
                ]
            ]);
        } else {
            return response()->json([
                'error' => 'get error',
            ], JsonResponse::HTTP_NOT_FOUND);
        }
    }


    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int                      $id
     *
     * @return \Illuminate\Http\Response
     */
    public function update(SalonManagerUpdateRequest $request, $id)
    {
        $salon = $this->salonRepository->update($id, $request->all());

        return response()->json([
            'message' => 'Update success',
            'data' => [
                'salon' => $salon,
            ]
        ]);
    }

}
