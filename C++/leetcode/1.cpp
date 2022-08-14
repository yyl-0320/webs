#include <iostream>
#include <vector>
using namespace std;
class count {
    public:
    vector<int>twosum(vector<int> nums,int target){
        int i,j;
        i=0;j=1;
        for(;i<nums.size()-1;i++){
            j=i+1;
            for(;j<nums.size();j++)
                if (nums[i]+nums[j]==target)
                 return {i,j};
        }
        return{0,0};

    }
};
int main() {
    vector<int> nums={2,9,5,2,3};
    count y ;
    vector<int> v=y.twosum(nums,5);
    cout<<'{'<<v[0]<<','<<v[1]<<'}';
    while (1)
    {
    }
    
}

