var Election = artifacts.require("./Election.sol");

contract('Election', function(accounts){
    it("Initialize with 2 candidates", function(){
        return Election.deployed().then(instance => {
            return instance.candidatesCount();
        }).then(count => {
            assert.equal(count, 2)
        })
    })
})